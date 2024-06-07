class LoginForm {
  elements = {
    userInput: () =>  cy.get('[data-testid="input-cpf-login"]'),
    passwordInput: () => cy.get('[data-testid="input-password-login"]'),
    btnEnter: () => cy.get('[data-testid="btn-submit-login"]').click(),
  }

  typeLogin(text) {
    if (!text) return
    this.elements.userInput().type(text)
  }

  typePassword(password) {
    if (!password) return
    this.elements.passwordInput().type(password)
  }

  clickEnter() {
    this.elements.btnEnter().click()
  }
}

const registerForm = new LoginForm()

describe('First access', () => {
  const input = {
    cpf: '38532508820',
    password: 'Teste123',
  }

  it('Visit page', () => {
    cy.visit('/')
  })

  it (`Complete with the "${input.cpf}" CPF"`, () =>{
    registerForm.typeLogin(input.cpf)
  })

  it (`Complete with the "${input.password}" password"`, () =>{
    registerForm.typePassword(input.password)
  })

  it(`Hit the enter button`, () => {
    registerForm.clickEnter()
  })

})


