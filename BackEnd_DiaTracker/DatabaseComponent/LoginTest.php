<?php

use PHPUnit\Framework\TestCase;

class LoginTest extends TestCase
{
    private $client;
    
    public function setUp(): void
    {
        $this->client = new GuzzleHttp\Client([
            'base_uri' => 'http://localhost/'
        ]);
    }
    
    public function testLoginPage()
    {
        $response = $this->client->get('/login.php');
        $this->assertSame(200, $response->getStatusCode());
        $this->assertStringContainsString('Login', (string)$response->getBody());
    }

    public function testInvalidEmail()
    {
        $response = $this->client->post('/login.php', [
            'form_params' => [
                'email' => 'invalid_email',
                'password' => 'password',
                'g-recaptcha-response' => 'valid_captcha_response'
            ]
        ]);
        $this->assertSame(302, $response->getStatusCode());
        $this->assertStringContainsString('No Email Found', $_SESSION['status']);
    }

    public function testInvalidPassword()
    {
        $response = $this->client->post('/login.php', [
            'form_params' => [
                'email' => 'valid_email@example.com',
                'password' => 'invalid_password',
                'g-recaptcha-response' => 'valid_captcha_response'
            ]
        ]);
        $this->assertContain(302, $response->getStatusCode());
        $this->assertStringContainsString('Invalid Email or Password', $_SESSION['status']);
    }

    public function testValidLogin()
    {
        $response = $this->client->post('/login.php', [
            'form_params' => [
                'email' => 'valid_email@example.com',
                'password' => 'valid_password',
                'g-recaptcha-response' => 'valid_captcha_response'
            ]
        ]);
        $this->assertContain(302, $response->getStatusCode());
        $this->assertStringContainsString('You are Logged in Successfully', $_SESSION['status']);
        $this->assertStringContainsString('User ID:', (string)$response->getBody());
        $this->assertStringContainsString('Location: http://localhost:3000', implode(', ', $response->getHeader('Location')));
        
    }
    
    public function tearDown(): void
    {
        $_SESSION = [];
    }
}
