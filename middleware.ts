import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

/**
 * Middleware para manipulação de solicitações Next.js.
 *
 * @param req - O objeto NextRequest que representa a solicitação HTTP atual.
 * @returns Um objeto NextResponse que representa a resposta HTTP a ser enviada.
 */
export async function middleware(req: NextRequest) {
    // Lógica do middleware para processar a solicitação.

    // Inicializa uma resposta NextResponse.
    const res = NextResponse.next();

    try {
        // Cria um cliente Supabase para autenticação usando o objeto req e res.
        const supabase = createMiddlewareClient({ req, res });

        // Tenta obter a sessão de autenticação do Supabase.
        await supabase.auth.getSession();
    } catch (error) {
        // Registra qualquer erro que ocorrer durante o processo.
        console.log(`Erro: ${error}`);
    }

    // Retorna a resposta NextResponse, que pode ter sido modificada durante o processamento do middleware.
    return res;
}
