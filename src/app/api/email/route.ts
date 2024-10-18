import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import KoalaWelcomeEmail from '@/emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response){
  const {name, email, phone}: {name: string, email: string, phone: string} = await req.json();
   const sendEmail = await resend.emails.send({
        from: 'info@getfunds.co.za',
        to: ['info@getfunds.co.za', email], 
        subject: 'Start offering funding as a service',
        react: KoalaWelcomeEmail({
          userFirstname: name
        })
      });
        console.log(sendEmail)
      return NextResponse.json({
        status: 'ok'
      })
}
