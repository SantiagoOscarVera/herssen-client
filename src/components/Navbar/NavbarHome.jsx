import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function NavBarHome() {
    const { t, i18n } = useTranslation(["welcome"]);
    function changeLanguageToFrances() {
        i18n.changeLanguage("frances");
    }
    function changeLanguageToEnglish() {
        i18n.changeLanguage("en");
    }

    return (
        <div className='flex justify-between mx-10 my-5'>
            <div className="flex items-center ml-2">
                <Link to="/">
                    <div className="flex items-center">
                        <img
                            src="https://media.discordapp.net/attachments/1115030128808964178/1115032798638653442/caballo_preview_rev_1.png"
                            alt="Logo"
                            style={{ width: '10%', height: '10%' }}
                            className="mr-4"
                        />
                        <span className="text-white text-2xl">Herssen</span>
                    </div>
                </Link>
            </div>
            <div className="flex justify-center">
                <button className="text-white mr-2" onClick={changeLanguageToFrances}>{t("frances")}</button>
                <button className="text-white" onClick={changeLanguageToEnglish}>{t("ingles")}</button>
            </div>
        </div>
    );
}

export default NavBarHome;
