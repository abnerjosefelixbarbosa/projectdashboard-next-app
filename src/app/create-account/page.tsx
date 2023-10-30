

export default function CreateAccount() {
    return (
        <div>
          <main>
            <section className="create-account-container">
              <div className="create-account-header"></div>
              <div className="create-account-body">
                <form>
                  <div className="create-account-form-controller">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                  </div>
                  <div className="create-account-form-controller">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />
                  </div>
                  <div className="create-account-form-controller">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" />
                  </div>
                  <div className="create-account-form-controller">
                    <label htmlFor="password">Repeat Password:</label>
                    <input type="password" id="password" />
                  </div>
                  <div className="center">
                    <button className="create-button">Create</button>
                  </div>
                </form>
              </div>
              <div className="create-account-fooder"></div>
            </section>
          </main>
        </div>
    );
}