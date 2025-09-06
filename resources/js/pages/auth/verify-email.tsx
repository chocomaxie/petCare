// VerifyEmail.tsx
import { Form, Head, Link } from '@inertiajs/react';

export default function VerifyEmail({ status }: { status?: string }) {
    return (
        <div className="login-container">
            <Head title="Email Verification" />
            <div className="form-container">
                <button className="btn-back" type="button">
                    <Link prefetch href="/">
                        <i className="fa-solid fa-arrow-left"></i> Back
                    </Link>
                </button>

                <h1 className="form-title">Verify Email</h1>
                <p className="text-sm text-gray-600 mb-4 text-center">
                    Please verify your email address by clicking on the link we just emailed to you.
                </p>

                {status === 'verification-link-sent' && (
                    <div className="mb-4 text-center text-sm font-medium text-green-600">
                        A new verification link has been sent to the email address you provided during registration.
                    </div>
                )}

                <Form method="post" action={route('verification.send')} className="space-y-4">
                    {({ processing }) => (
                        <>
                            <button
                                type="submit"
                                className="btn w-full"
                                disabled={processing}
                            >
                                {processing && <i className="fa-solid fa-spinner fa-spin"></i>}
                                {' '}
                                Resend 
                            </button>

                            <div className="text-center">
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Log out
                                </Link>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </div>
    );
}
