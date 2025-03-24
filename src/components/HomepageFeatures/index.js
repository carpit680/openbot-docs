import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: "Open-Source",
		Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>
				Hardware, software, and design files are open-source, allowing anyone to
				customize, experiment, and innovate freely.
			</>
		),
	},
	{
		title: "Affordable",
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>
				Our projects are designed to be low-cost for research and tinkering
				without compromising on quality.
			</>
		),
	},
	{
		title: "End-to-End",
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				We provide everything you need to build, train, and deploy your AI
				robot, from hardware to software and AI models.
			</>
		),
	},
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
