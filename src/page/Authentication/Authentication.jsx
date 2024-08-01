function Authentication() {
    return (
        <div>
            {/* login form */}
            <div>
                <form>
                    {/* email */}
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" required />
                    </div>

                    {/* password */}
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" required />
                    </div>
                </form>
            </div>

            {/* Register form */}
            <div></div>
        </div>
    );
}

export default Authentication;
