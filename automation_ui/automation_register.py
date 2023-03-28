import unittest
import time
from selenium import webdriver 
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

class TestRegister(unittest.TestCase): 

    def setUp(self): 
        self.browser = webdriver.Chrome(ChromeDriverManager().install())
        
    def test_a_success_register(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signUp").click() 
        time.sleep(1)
        browser.find_element(By.ID,"name_register").send_keys("jagokoir")
        time.sleep(1)
        browser.find_element(By.ID,"email_register").send_keys("testerkoir77@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password_register").send_keys("jagokoir1234")
        time.sleep(1)
        browser.find_element(By.ID,"signup_register").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual('berhasil', response_data)
        self.assertEqual(response_message, 'created user!')

    def test_failed_register_with_empty_email(self): 
        # steps
        browser = self.browser
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signUp").click()
        time.sleep(1)
        browser.find_element(By.ID,"name_register").send_keys("jagokoir")
        time.sleep(1)
        browser.find_element(By.ID,"password_register").send_keys("jagokoir1234")
        time.sleep(1)
        browser.find_element(By.ID,"signup_register").click()
        time.sleep(1)
        
        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, 'Oops...')
        self.assertEqual(response_message, 'Gagal Register!')

    def test_failed_register_with_empty_password(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signUp").click() 
        time.sleep(1)
        browser.find_element(By.ID,"name_register").send_keys("jagokoir")
        time.sleep(1)
        browser.find_element(By.ID,"email_register").send_keys("testerkoir@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"signup_register").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, 'Oops...')
        self.assertEqual(response_message, 'Gagal Register!')

    def test_failed_register_with_all_empty(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signUp").click() 
        time.sleep(1)
        browser.find_element(By.ID,"signup_register").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, 'Oops...')
        self.assertEqual(response_message, 'Gagal Register!')

    def test_failed_register_duplicate_email(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signUp").click() 
        time.sleep(1)
        browser.find_element(By.ID,"name_register").send_keys("jagokoir")
        time.sleep(1)
        browser.find_element(By.ID,"email_register").send_keys("testerkoir2@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password_register").send_keys("jagokoir1234")
        time.sleep(1)
        browser.find_element(By.ID,"signup_register").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, 'Oops...')
        self.assertEqual(response_message, 'Gagal Register!')


    def test_failed_register_invalid_email(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signUp").click() 
        time.sleep(1)
        browser.find_element(By.ID,"name_register").send_keys("jagokoir")
        time.sleep(1)
        browser.find_element(By.ID,"email_register").send_keys("testerkoir9123")
        time.sleep(1)
        browser.find_element(By.ID,"password_register").send_keys("jagokoir1234")
        time.sleep(1)
        browser.find_element(By.ID,"signup_register").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, 'Oops...')
        self.assertEqual(response_message, 'Gagal Register!')
        
    def test_failed_register_name_symbol(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signUp").click() 
        time.sleep(1)
        browser.find_element(By.ID,"name_register").send_keys("!#$%&'()")
        time.sleep(1)
        browser.find_element(By.ID,"email_register").send_keys("testerkoir23@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password_register").send_keys("jagokoir1234")
        time.sleep(1)
        browser.find_element(By.ID,"signup_register").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, 'Oops...')
        self.assertEqual(response_message, 'Gagal Register!')
                
    def test_failed_register_email_over_max_length(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signUp").click() 
        time.sleep(1)
        browser.find_element(By.ID,"name_register").send_keys("jagokoir")
        time.sleep(1)
        browser.find_element(By.ID,"email_register").send_keys("LoremipsumdolorsitametconsectetueradipiscingelitAeneancommodoligulaegetdolorAeneanmassaCumsociisnatoquepenatibusetmagnisdisparturientmontesnasceturridiculusmusDonecquamfelisultriciesnecpellentesqueeupretiumquissemNullaconsequatmassaquisenimDonecpedejustofringillavelaliquetnecvulputateegetarcuInenimjustorhoncusutimperdietavenenatisvitaejustoNullamdictumfeliseupedemollispretiumIntegertincidunt@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password_register").send_keys("jagokoir1234")
        time.sleep(1)
        browser.find_element(By.ID,"signup_register").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, 'Oops...')
        self.assertEqual(response_message, 'Gagal Register!')
                        
    def test_failed_register_password_over_max_length(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signUp").click() 
        time.sleep(1)
        browser.find_element(By.ID,"name_register").send_keys("jagokoir")
        time.sleep(1)
        browser.find_element(By.ID,"email_register").send_keys("testerkoir23@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password_register").send_keys("Loremipsumdolorsitamet,consectetueradipiscingelit.Aeneancommodoligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdisparturientmontes,nasceturridiculusmus.Donecquamfelis,ultriciesnec,pellentesqueeu,pretiumquis,sem.Nullaconsequatmassaquisenim.Donecpedejusto,fringillavel,aliquetnec,vulputateeget,arcu.Inenimjusto,rhoncusut,imperdieta,venenatisvitae,justo.Nullamdictumfeliseupedemollispretium.Integertincidunt")
        time.sleep(1)
        browser.find_element(By.ID,"signup_register").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, 'Oops...')
        self.assertEqual(response_message, 'Gagal Register!')
                                
    def test_failed_register_name_over_max_length(self): 
        # steps
        browser = self.browser 
        browser.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(3)
        browser.find_element(By.ID,"signUp").click() 
        time.sleep(1)
        browser.find_element(By.ID,"name_register").send_keys("Loremipsumdolorsitamet,consectetueradipiscingelit.Aeneancommodoligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdisparturientmontes,nasceturridiculusmus.Donecquamfelis,ultriciesnec,pellentesqueeu,pretiumquis,sem.Nullaconsequatmassaquisenim.Donecpedejusto,fringillavel,aliquetnec,vulputateeget,arcu.Inenimjusto,rhoncusut,imperdieta,venenatisvitae,justo.Nullamdictumfeliseupedemollispretium.Integertincidunt")
        time.sleep(1)
        browser.find_element(By.ID,"email_register").send_keys("testerkoir23@gmail.com")
        time.sleep(1)
        browser.find_element(By.ID,"password_register").send_keys("jagokoir1234")
        time.sleep(1)
        browser.find_element(By.ID,"signup_register").click()
        time.sleep(1)

        # validasi
        response_data = browser.find_element(By.ID,"swal2-title").text
        response_message = browser.find_element(By.ID,"swal2-content").text

        self.assertEqual(response_data, 'Oops...')
        self.assertEqual(response_message, 'Gagal Register!')


    def tearDown(self): 
        self.browser.close() 

if __name__ == "__main__": 
    unittest.main()