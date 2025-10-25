import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './menuComponent.css';
import pt from '../locales/pt.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

   
    
export default function MenuComponent({ onLanguageChange }) {
    const [locale, setLocale] = useState('en');
    const translations = { en, pt, fr };

    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        const langCode = userLang.split('-')[0]; // Extrai o código do idioma (ex: 'en', 'pt', 'fr')

        const googleTranslateScript = document.createElement('script');
        googleTranslateScript.type = 'text/javascript';
        googleTranslateScript.async = true;
        googleTranslateScript.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
        document.body.appendChild(googleTranslateScript);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,pt,fr',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        };

        // Define o idioma inicial com base na localidade do navegador
        if (langCode === 'pt' || langCode === 'fr') {
            setTimeout(() => {
                const selectElement = document.querySelector('.goog-te-combo');
                if (selectElement) {
                    selectElement.value = langCode;
                    selectElement.dispatchEvent(new Event('change'));
                }
            }, 1000); // Aguarda o carregamento do Google Translate
        }
    }, []);


    const translatePage = (lang) => {
        const googleTranslateScript = document.createElement('script');
        googleTranslateScript.type = 'text/javascript';
        googleTranslateScript.async = true;
        googleTranslateScript.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
        document.body.appendChild(googleTranslateScript);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,pt,fr',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        };
    };

    return(<>
        <div className="custom-navbar">
        <div className="container">
            <div className="logo">Alamy Neto</div>         
            <ul className="nav">
                <Link to="/"><li className="item" ><p className="link">Home</p></li></Link>
                <Link to="/abolt"> <li className="item" ><p className="link">About</p></li></Link>
                <Link to="/skill">  <li className="item" ><p className="link">Skill</p></li></Link>
                <Link to="/contact"> <li className="item" ><p className="link">Contact</p></li></Link>
            </ul>
          
          
        </div>          
    </div>
    </>
    )
}