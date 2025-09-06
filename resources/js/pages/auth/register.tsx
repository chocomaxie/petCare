import { Form, Head, Link } from '@inertiajs/react';

const Create = () => {
    return (
        <div className="register-container">
            <Head title="Register" />
            <Form
                method="post"
                action={route('register')}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="form-container"
            >
                {({ processing, errors }) => (
                    <>
                        <button className="btn-back" type="button">
                            <Link prefetch href="/">
                                <i className="fa-solid fa-arrow-left"></i> Back
                            </Link>
                        </button>

                        <h1 className="form-title">Register</h1>

                        <div className="input-box">
                            <input type="text" placeholder="Username" name="name" id="name" required />
                            {errors.name && <div className="error">{errors.name}</div>}
                        </div>

                        <div className="input-box">
                            <input type="email" name="email" id="email" autoComplete="email" placeholder="Email@example.com" required />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>

                        {/* Password Input */}
                        <div className="input-box">
                            <input type="password" placeholder="Password" name="password" id="password" required />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder="Confirm Password" id="password_confirmation" name="password_confirmation" required />
                            {errors.password_confirmation && <div className="error">{errors.password_confirmation}</div>}
                        </div>

                        <button className="btn" type="submit" disabled={processing}>
                            {processing && <i className="fa-solid fa-spinner fa-spin"></i>}
                            {' '} Register
                        </button>

                        <p className="footer">
                            Already have an account?{' '}
                            <Link className="touch" prefetch href={route('login')}>
                                Login
                            </Link>
                        </p>
                    </>
                )}
            </Form>
        </div>
    );
};

export default Create;
