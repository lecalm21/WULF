<?php


use PHPUnit\Framework\TestCase;

class TestTest extends TestCase
{
    public static function validation($input)
    {

    }

    public function testValidationOk()
    {
        $input = array('name' => 'John', 'email' => 'john@gmail.com');
        $errorsArray = contact::validation($input);
        assertCount(0, $errorsArray);
    }
    public function testValidationFailWithInvalidEmail()
    {
        $input = array('name' => 'John', 'email' => 'john.com');
        $errorsArray = MyClass::validation($input);
        assertCount(1, $errorsArray);
    }
    public function testEmailAddressCanBeSet(){

        $this->request->setMethod('POST')->setPost(array('karjemapass@gmail.com'));
    }
    public function testUserNameistString(){
        $visitor_name = $this->visitor_name->getVisitor_name();
        $this->assertTrue(is_string($visitor_name));
    }
}
