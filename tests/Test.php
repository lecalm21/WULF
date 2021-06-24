<?php


use PHPUnit\Framework\TestCase;
use EmailValidator;

class Test extends TestCase
{
    /**
     * @var EmailValidator
     */
    public $emailValidator;

    /**
     * Setup the test class.
     */
    public function setUp(): void
    {
        $this->emailValidator = new EmailValidator();
    }

    /**
     * Test if the email validation validates email addresses.
     *
     *
     * @param string  $email
     * @param bool    $result
     */
    public function testEmailValidation(string $email, bool $result)
    {
        $validated = $this->emailValidator->isValid($email);

        $this->assertEquals($result, $validated, 'The provided email address is not valid.');
    }

    public function testValidationIsUsed()
    {
        $invalidEmail = new InvalidEmail(new DummyReason(), '');
        $validator = new EmailValidator();
        $validation = $this->getMockBuilder(EmailValidation::class)->getMock();
        $validation->expects($this->once())->method("isValid")->willReturn(true);
        $validation->expects($this->once())->method("getWarnings")->willReturn([]);
        $validation->expects($this->once())->method("getError")->willReturn($invalidEmail);

        $this->assertTrue($validator->isValid("example@example.com", $validation));
    }

}
