'use client';

import Link from 'next/link';
import { Button, Input, Template } from '@/components';

export default function Login() {
    return (
    <Template>
      <main className="mx-auto max-w-xl p-4">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <h1 className="mb-4 text-2xl font-bold">Login</h1>
        </div>

        <div className="space-y-4">
          <Input
            label="Nome"
          />

          <Input
            label="E-mail"
          />

          <Input
            label="Senha"
            type="password" 
          />

          <Input
            label="Repetir senha"
            type="password" 
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700"
        >
          Logar na minha conta
        </button>

        <Link className="mt-4 inline-block underline" href="/galeria">
          Voltar para a galeria
        </Link>
      </main>
    </Template>
    );
}
