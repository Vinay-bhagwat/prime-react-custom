import BlockSection from '@/components/landing/blocksection';
import FeaturesSection from '@/components/landing/featuressection';
import FooterSection from '@/components/landing/footersection';
import HeroSection from '@/components/landing/herosection';
import TemplateSection from '@/components/landing/templatesection';
import ThemeSection from '@/components/landing/themesection';
import UsersSection from '@/components/landing/userssection';
import AppContentContext from '@/components/layout/appcontentcontext';
import Topbar from '@/components/layout/topbar';
import { useMountEffect } from '@/components/lib/primereact.all';
import { classNames } from '@/components/lib/utils/Utils';
import NewsSection from '@/components/news/newssection';
import { AdvancedRiskAnalyserTable } from 'advanced-risk-analyser/components/AdvancedRiskAnalyserTable';
import Head from 'next/head';
import { useContext } from 'react';

export default function Home() {
    const { newsActive, darkMode, changeTheme } = useContext(AppContentContext);
    const landingClass = classNames('landing', { 'layout-light': !darkMode, 'layout-dark': darkMode, 'layout-news-active': newsActive });

    const toggleDarkMode = () => {
        const newTheme = darkMode ? 'lara-light-cyan' : 'lara-dark-cyan';

        changeTheme(newTheme, !darkMode);
    };

    useMountEffect(() => {
        changeTheme(darkMode ? 'lara-dark-cyan' : 'lara-light-cyan', darkMode);
    });

    return (
        <div className={landingClass}>
           <AdvancedRiskAnalyserTable/>
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
};
