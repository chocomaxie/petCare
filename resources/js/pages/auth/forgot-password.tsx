// ForgotPassword.tsx
import { Form, Head, Link } from '@inertiajs/react';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <div className="login-container">
            <Head title="Forgot Password" />
            <Form method="post" action={route('password.email')} className="form-container">
                {({ processing, errors }) => (
                    <>
                        <button className="btn-back" type="button">
                            <Link prefetch href={route('login')}>
                                <i className="fa-solid fa-arrow-left"></i>
                                {' '} Back
                            </Link>
                        </button>

                        {status && (
                            <div className="mb-4 text-center text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}

                        <h1 className="form-title">Forgot Password</h1>

                        <div className="input-box">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="off"
                                placeholder="Email@example.com"
                                required
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>

                        <button
                            type="submit"
                            className="btn"
                            disabled={processing}
                        >
                            {processing && <i className="fa-solid fa-spinner fa-spin"></i>}
                            {' '}
                            Reset
                        </button>

                        <p className="footer">
                            Remember your password?{' '}
                            <Link className="touch" prefetch href={route('login')}>
                                Login
                            </Link>
                        </p>
                    </>
                )}
            </Form>
        </div>
    );
}
