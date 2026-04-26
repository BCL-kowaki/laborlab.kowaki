'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { CONTACT_PAGE } from '@/lib/copy';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(1, 'お名前をご入力ください'),
  company: z.string().min(1, '会社名をご入力ください'),
  employees: z.string().min(1, '従業員数をお選びください'),
  email: z.string().email('正しいメールアドレスをご入力ください'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'ご相談内容をお選びください'),
  message: z.string().min(10, 'お問い合わせ内容を10文字以上でご入力ください'),
  /** Honeypot: スパムボット対策（通常ユーザーには非表示） */
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

/**
 * お問い合わせフォーム。
 * バリデーションは zod + react-hook-form。
 * 送信は /api/contact 経由で GAS Web App に転送される。
 */
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  );
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setStatus('submitting');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let msg = '送信に失敗しました。時間をおいて再度お試しください。';
        try {
          const j = await res.json();
          if (j?.error === 'invalid_input') {
            msg = '入力内容に誤りがあります。ご確認のうえ再度お試しください。';
          }
        } catch {
          // ignore
        }
        setErrorMessage(msg);
        setStatus('error');
        return;
      }

      setStatus('success');
      reset();
    } catch (err) {
      console.error('[Contact Form] submit failed', err);
      setErrorMessage(
        '通信エラーが発生しました。時間をおいて再度お試しください。',
      );
      setStatus('error');
    }
  };

  const form = CONTACT_PAGE.form;

  if (status === 'success') {
    return (
      <div className="p-8 bg-accent-50 border border-accent-200 rounded-lg text-center">
        <h3 className="font-sans-ja text-h3 font-bold text-primary-900 mb-3">
          お問い合わせを受け付けました
        </h3>
        <p className="text-body text-primary-700 leading-relaxed">
          内容を確認のうえ、1営業日以内にご返信いたします。
          <br />
          しばらくお待ちください。
        </p>
        <Button
          variant="ghost"
          onClick={() => setStatus('idle')}
          className="mt-6"
        >
          もう一度お問い合わせする
        </Button>
      </div>
    );
  }

  const inputBase =
    'w-full h-12 px-4 border border-gray-200 rounded-md bg-white text-body text-primary-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      {/* お名前 */}
      <div>
        <label
          htmlFor="name"
          className="block font-sans-ja text-body-sm font-bold text-primary-900 mb-2"
        >
          お名前 <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="例：鹿児島 太郎"
          className={cn(inputBase, errors.name && 'border-red-500')}
          {...register('name')}
        />
        {errors.name && (
          <p className="mt-1 text-caption text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* 会社名 */}
      <div>
        <label
          htmlFor="company"
          className="block font-sans-ja text-body-sm font-bold text-primary-900 mb-2"
        >
          会社名 <span className="text-accent">*</span>
        </label>
        <input
          id="company"
          type="text"
          placeholder="例：株式会社○○"
          className={cn(inputBase, errors.company && 'border-red-500')}
          {...register('company')}
        />
        {errors.company && (
          <p className="mt-1 text-caption text-red-600">
            {errors.company.message}
          </p>
        )}
      </div>

      {/* 従業員数 */}
      <div>
        <label
          htmlFor="employees"
          className="block font-sans-ja text-body-sm font-bold text-primary-900 mb-2"
        >
          従業員数 <span className="text-accent">*</span>
        </label>
        <select
          id="employees"
          defaultValue=""
          className={cn(inputBase, errors.employees && 'border-red-500')}
          {...register('employees')}
        >
          <option value="" disabled>
            選択してください
          </option>
          {form.employeeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.employees && (
          <p className="mt-1 text-caption text-red-600">
            {errors.employees.message}
          </p>
        )}
      </div>

      {/* メール・電話 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block font-sans-ja text-body-sm font-bold text-primary-900 mb-2"
          >
            メールアドレス <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@company.com"
            className={cn(inputBase, errors.email && 'border-red-500')}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-caption text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block font-sans-ja text-body-sm font-bold text-primary-900 mb-2"
          >
            電話番号
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="090-0000-0000"
            className={inputBase}
            {...register('phone')}
          />
        </div>
      </div>

      {/* ご相談内容 */}
      <div>
        <label
          htmlFor="subject"
          className="block font-sans-ja text-body-sm font-bold text-primary-900 mb-2"
        >
          ご相談内容 <span className="text-accent">*</span>
        </label>
        <select
          id="subject"
          defaultValue=""
          className={cn(inputBase, errors.subject && 'border-red-500')}
          {...register('subject')}
        >
          <option value="" disabled>
            選択してください
          </option>
          {form.subjectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="mt-1 text-caption text-red-600">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* お問い合わせ内容 */}
      <div>
        <label
          htmlFor="message"
          className="block font-sans-ja text-body-sm font-bold text-primary-900 mb-2"
        >
          お問い合わせ内容 <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="ご相談の詳細をお聞かせください"
          className={cn(
            'w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-body text-primary-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors leading-relaxed resize-y',
            errors.message && 'border-red-500',
          )}
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1 text-caption text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot（ボット対策・人間には非表示） */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      {/* プライバシー注記 */}
      <p className="text-caption text-primary-600 leading-relaxed">
        {form.privacyNote}
      </p>

      {/* 送信ボタン */}
      <div>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto min-w-[200px]"
        >
          {status === 'submitting' ? '送信中...' : form.submit}
        </Button>
      </div>

      {status === 'error' && errorMessage && (
        <p className="text-body-sm text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
