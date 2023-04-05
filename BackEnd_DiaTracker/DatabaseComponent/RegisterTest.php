<?php
use PHPUnit\Framework\TestCase;

class RegisterTest extends TestCase
{
    public function testPasswordsDoNotMatch()
    {
        $url = 'http://localhost/register.php';
        $formData = [
            'username' => 'testuser',
            'email' => 'test@example.com',
            'password1' => 'password',
            'password2' => 'differentpassword'
        ];
    
        $response = $this->post($url, $formData);
    
        $this->assertStringContainsString('Passwords do not match', $response);
    }
    
    public function testPasswordLengthIsLessThan8()
    {
        $url = 'http://localhost/register.php';
        $formData = [
            'username' => 'John',
            'email' => 'john@example.com',
            'password1' => 'pass',
            'password2' => 'pass',
            'g-recaptcha-response' => 'test'
        ];
        $response = $this->post($url, $formData);
    
        $this->assertStringContainsString('Password must be at least 8 characters long', $response);
    }
    
    private function post($url, $data) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec ($ch);
        curl_close ($ch);
        return $response;
    }
}