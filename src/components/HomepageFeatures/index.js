import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Reverse Engineering',
    Svg: require('@site/static/img/reverse.svg').default,
    description: (
      <>
        Follow my journey as I reverse engineer various electronic shelf tags. 
      </>
    ),
  },
  {
    title: 'Tooling & Development',
    Svg: require('@site/static/img/tooling.svg').default,
    description: (
      <>
        Read the documentation around the toolchain and development process for various ESL tag types like 
        SES-ImagoTag G1 and Vusion with different microcontrollers inside.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
