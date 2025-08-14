@BugsForm @Smoke
Feature: Bugs Form - Register

  Background:
    Given El usuario está en la página del formulario de Bugs

  # TC-01
  Scenario: Validar que el apellido sea obligatorio
    When El usuario completa el formulario sin apellido
    And El usuario hace clic en Registrar
    Then El campo Apellido debería ser inválido

  # TC-02
  Scenario: Validar que el teléfono exige mínimo 10 dígitos y rechaza no numéricos
    When El usuario completa el formulario con teléfono "12345"
    And El usuario hace clic en Registrar
    Then El campo Teléfono debería ser inválido
    When El usuario refresca la página y completa el formulario con teléfono "1234567890"
    And El usuario hace clic en Registrar
    Then El campo Teléfono debería ser válido

  # TC-03
  Scenario: Validar formato de email (caso inválido común)
    When El usuario completa el formulario con email "plainaddress"
    And El usuario hace clic en Registrar
    Then El campo Email debería ser inválido

  # TC-04
  Scenario: Validar límites de longitud de contraseña [6,20]
    When El usuario completa el formulario con contraseña "abc12"
    And El usuario hace clic en Registrar
    Then El campo Contraseña debería ser inválido
    When El usuario refresca la página y completa el formulario con contraseña "abc123"
    And El usuario hace clic en Registrar
    Then El campo Contraseña debería ser válido
    When El usuario refresca la página y completa el formulario con contraseña "aaaaaaaaaaaaaaaaaaaaa"
    And El usuario hace clic en Registrar
    Then El campo Contraseña debería ser inválido

  # TC-05
  Scenario: Validar checkbox de Términos obligatorio y manejo de País
    When El usuario completa el formulario sin aceptar los términos
    And El usuario hace clic en Registrar
    Then El checkbox de Términos debería ser obligatorio o inválido
    When El usuario refresca la página y completa el formulario seleccionando país "Argentina" y aceptando los términos
    And El usuario hace clic en Registrar
    Then El campo País debería ser válido

