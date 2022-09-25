import Head from 'next/head';
import React from 'react';
import { Footer, Header } from 'src/stories/atoms';
import { GoalComponent } from 'src/stories/atoms/campaignSections/GoalComponent';
import HowIt from 'src/stories/atoms/campaignSections/HowIt';
import HowToHelp from 'src/stories/atoms/campaignSections/HowToHelp';
import OurCampaign from 'src/stories/atoms/campaignSections/OurCampaign';
import OurKitSection from 'src/stories/atoms/campaignSections/OurKitSection';
import { Partners } from 'src/stories/atoms/campaignSections/Partners';
import styles from 'styles/Home.module.scss';

export default function Campaign(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clica e Multiplica</title>
        <link rel="icon" href="/easyicon-2.ico" />
      </Head>
      <main>
        <Header display="none" />
        <OurCampaign />
        <HowIt />
        <GoalComponent />
        <Partners />
        <OurKitSection />
        <HowToHelp />
      </main>
      <Footer />
    </div>
  );
}
