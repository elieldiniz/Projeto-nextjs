// Adicione a diretiva "use client" no topo do arquivo
'use client'

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import {Form} from "@/components/ui/form"

// Definindo um esquema de validação chamado 'formSchema'
const formSchema = z.object({
  // Propriedade 'email' no esquema
  email: z
    .string({
      // Mensagem de erro personalizada se 'email' estiver ausente
      required_error: 'Por favor, insira um e-mail',
    })
    .email({
      // Validação de formato de e-mail
      message: 'E-mail inválido',
    }),

  // Propriedade 'password' no esquema
  password: z
    .string({
      // Mensagem de erro personalizada se 'password' estiver ausente
      required_error: 'A senha é obrigatória',
    })
    .min(7, {
      // Garante que a senha tenha pelo menos 7 caracteres
      message: 'A senha precisa ter pelo menos 7 caracteres',
    })
    .max(12, {
      // Garante que a senha tenha no máximo 12 caracteres
      message: 'Máximo de 12 caracteres permitidos',
    }),
});

export function CreateAccountForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log('Submitted values', values);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-2">

      <span className="text-ls">you will love it</span>

      <Form {...form}>

      </Form>
      
    </div>
  );
}
