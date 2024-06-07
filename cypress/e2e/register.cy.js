class RegisterForm {
  elements = {
    btnEnter: () => cy.get('[data-testid="btn-redirect-create-account"]'),
    selectPlan: () => cy.get('[data-testid="plan-free-register"]'),
    inputUser: () => cy.get('[data-testid="username-register"]'),
    inputEmail: () => cy.get('[data-testid="email-register"]'),
    inputPhone: () => cy.get('[data-testid="cellphone-register"]'),
    inputIncome: () => cy.get('[data-testid="income-register"]'),
    inputCPF: () => cy.get('[data-testid="cpf-register"]'),
    inputCEP: () => cy.get('[data-testid="cep-register"]'),
    inputPassword: () => cy.get('[data-testid="password-register"]'),
    inputConfirmPassword: () => cy.get('[data-testid="confirm-password-register"]'),
    checkBox: () => cy.get('[data-testid="confirm-terms-register"]').click({force: true}),
    btnRegiter: () => cy.get('[data-testid="btn-submit-register"]'),
  }

  clickEnter() {
    this.elements.btnEnter().click()
  }

  clickPlan() {
    this.elements.selectPlan().click()
  }

  typeUser(text) {
    if (!text) return
    this.elements.inputUser().type(text)
  }

  typeEmail(email) {
    if (!email) return
    this.elements.inputEmail().type(email)
  }

  typePhone(cell) {
    if (!cell) return
    this.elements.inputPhone().type(cell)
  }

  typeIncome(income) {
    if (!income) return
    this.elements.inputIncome().type(income)
  }

  typeCPF(cpf) {
    if (!cpf) return
    this.elements.inputCPF().type(cpf)
  }

  typeCEP(cep) {
    if (!cep) return
    this.elements.inputCEP().type(cep)
  }

  typePassword(password) {
    if (!password) return
    this.elements.inputPassword().type(password)
  }

  typeConfirmPassword(passwordConfirm) {
    if (!passwordConfirm) return
    this.elements.inputConfirmPassword().type(passwordConfirm)
  }

  confirmTerms() {
    this.elements.checkBox()
  }
  registerButton() {
    this.elements.btnRegiter().click()
  }

}

const registerForm = new RegisterForm()

describe('First access', () => {

  const informations = {
    name: 'Ingrid Teste QA',
    email: 'ingridtesteS@gmail.com',
    cell: '14997821683',
    income: '2420',
    cpf: '38532508820',
    cep: '17402002',
    password: 'Teste123',
    passwordConfirm: 'Teste123',
  }

  it('Visit page', () => {
    cy.visit('/')
  })

  it(`Select create account`, () => {
    registerForm.clickEnter()
  })

  it(`Select plan`, () => {
    registerForm.clickPlan()
  })

  it (`Complete with the "${informations.name}" name"`, () =>{
    registerForm.typeUser(informations.name)
  })

  it (`Complete with the "${informations.email}" email"`, () =>{
    registerForm.typeEmail(informations.email)
  })

  it (`Complete with the "${informations.cell}" cell phone"`, () =>{
    registerForm.typePhone(informations.cell)
  })

  it (`Complete with the "${informations.income}" income"`, () =>{
    registerForm.typeIncome(informations.income)
  })

  it (`Complete with the "${informations.cpf}" CPF"`, () =>{
    registerForm.typeCPF(informations.cpf)
  })

  it (`Complete with the "${informations.cep}" CEP"`, () =>{
    registerForm.typeCEP(informations.cep)
  })

  it(`Complete with the "${informations.password}" password`, () =>{
    registerForm.typePassword(informations.password)
 })

  it (`Complete with the "${informations.passwordConfirm}" confirm password"`, () =>{
    registerForm.typeConfirmPassword(informations.passwordConfirm)
  })

  it(`Confirm Privacy Terms`, () => {
    registerForm.confirmTerms()
  })

  it(`Regiter`, () => {
    registerForm.registerButton()
  })

})