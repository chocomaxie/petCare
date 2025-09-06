// ConfirmPassword.tsx
import { Form, Head, Link } from '@inertiajs/react';

export default function ConfirmPassword() {
    return (
        <div className="login-container">
            <Head title="Confirm Password" />
            <Form method="post" action={route('password.confirm')} resetOnSuccess={['password']} className="form-container">
                {({ processing, errors }) => (
                    <>
                        <button className="btn-back" type="button">
                            <Link prefetch href="/">
                                <i className="fa-solid fa-arrow-left"></i> Back
                            </Link>
                        </button>

                        <h1 className="form-title">Confirm Password</h1>
                        <p className="text-sm text-gray-600 mb-4 text-center">
                            This is a secure area. Please confirm your password before continuing.
                        </p>

                        <div className="input-box">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                required
                            />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>

                        <button
                            type="submit"
                            className="btn"
                            disabled={processing}
                        >
                            {processing && <i className="fa-solid fa-spinner fa-spin"></i>}
                            {' '}
                            Confirm Password
                        </button>
                    </>
                )}
            </Form>
        </div>
    );
}
