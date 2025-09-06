import { Form, Head, Link } from '@inertiajs/react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

const Signin = ({ status, canResetPassword }: LoginProps) => {
    return (
        <div className="login-container">
            <Head title="Login" />

            <Form method="post" action={route('login')} className="form-container">
                {({ processing, errors }) => (
                    <>
                        {/* Back Button */}
                        <button className="btn-back" type="button">
                            <Link prefetch href="/">
                                <i className="fa-solid fa-arrow-left"></i> Back
                            </Link>
                        </button>

                        {/* Status Message */}
                        {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}

                        {/* Title */}
                        <h1 className="form-title">Login</h1>

                        {/* Email Input */}
                        <div className="input-box">
                            <input id="email" type="email" name="email" placeholder="Email@example.com" autoComplete="email" required />
                            {errors.email && <div className="error ">{errors.email}</div>}
                        </div>

                        {/* Password Input */}
                        <div className="input-box">
                            <input id="password" type="password" name="password" placeholder="Password" autoComplete="current-password" required />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>

                        {/* Remember Me + Forgot Password */}
                        <div className="mt-4 flex items-center justify-between">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" name="remember" id="remember" className="accent-blue-500" />
                                <span className="text-sm">Remember Me</span>
                            </label>

                            {/* Functional forgot password link */}
                            {canResetPassword && (
                                <Link prefetch href={route('password.request')} className="text-sm text-blue-600 hover:underline">
                                    Forgot Password?
                                </Link>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn mt-6" disabled={processing}>
                            {processing && <i className="fa-solid fa-spinner fa-spin"></i>} {' '} Log in
                        </button>

                        {/* Register Link */}
                        <p className="footer">
                            Don’t have an account?{' '}
                            <Link className="touch" prefetch href={route('register')}>
                                Register
                            </Link>
                        </p>
                    </>
                )}
            </Form>
        </div>
    );
};

export default Signin;
