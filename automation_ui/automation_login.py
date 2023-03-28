import unittest
import time
from selenium import webdriver 
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

class TestLogin(unittest.TestCase): 

    def setUp(self): 
        self.browser = webdriver.Chrome(ChromeDriverManager().install())
        
    def test_a_success_login(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"email").send_keys("testerkoir2@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password").send_keys("jagokoir1234")
        time.sleep(1)
        browser.find_element(By.ID,"signin_login").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertIn('Welcome', response_data)
        self.assertEqual(response_message, 'Anda Berhasil Login')


    def test_failed_login_with_empty_email_and_valid_password(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"password").send_keys("jagokoir1234")
        time.sleep(1)
        browser.find_element(By.ID,"signin_login").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, "User's not found")
        self.assertEqual(response_message, 'Email atau Password Anda Salah')

    def test_failed_login_with_empty_email_and_valid_password(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"password").send_keys("jagokoir1234")
        time.sleep(1)
        browser.find_element(By.ID,"signin_login").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, "User's not found")
        self.assertEqual(response_message, 'Email atau Password Anda Salah')

    def test_failed_login_with_empty_email_and_empty_password(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signin_login").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, "User's not found")
        self.assertEqual(response_message, 'Email atau Password Anda Salah')

    def test_failed_login_with_valid_email_and_empty_password(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"email").send_keys("testerkoir2@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"signin_login").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, "User's not found")
        self.assertEqual(response_message, 'Email atau Password Anda Salah')

                
    def test_failed_login_with_email_not_registered_and_password_random(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"email").send_keys("ikase.p@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password").send_keys("sjdhakjsdhd")
        time.sleep(1)
        browser.find_element(By.ID,"signin_login").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, "User's not found")
        self.assertEqual(response_message, 'Email atau Password Anda Salah')
                        
    def test_failed_login_with_email_valid_and_password_invalid(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"email").send_keys("jagocoba@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password").send_keys("Abcd1234")
        time.sleep(1)
        browser.find_element(By.ID,"signin_login").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, "User's not found")
        self.assertEqual(response_message, 'Email atau Password Anda Salah')

                                
    def test_failed_login_with_email_invalid_and_password_valid(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"email").send_keys("jagocoba26126126@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password").send_keys("jago123")
        time.sleep(1)
        browser.find_element(By.ID,"signin_login").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, "User's not found")
        self.assertEqual(response_message, 'Email atau Password Anda Salah')


    def test_failed_login_email_over_max_length(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"email").send_keys("jagocobajagocobajagocobajagocobajagocobajagocobajagocoba@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password").send_keys("jago123")
        time.sleep(1)
        browser.find_element(By.ID,"signin_login").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, "User's not found")
        self.assertEqual(response_message, 'Email atau Password Anda Salah')
            

    def test_failed_login_password_over_max_length(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"email").send_keys("jagocoba@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password").send_keys("jago123jago123jago123jago123jago123")
        time.sleep(1)
        browser.find_element(By.ID,"signin_login").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, "User's not found")
        self.assertEqual(response_message, 'Email atau Password Anda Salah')

    def tearDown(self): 
        self.browser.close() 

if __name__ == "__main__": 
    unittest.main()