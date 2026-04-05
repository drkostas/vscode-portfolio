import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import BellIcon from './icons/BellIcon';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import ScholarIcon from './icons/ScholarIcon';
import PypiIcon from './icons/PypiIcon';
import HuggingFaceIcon from './icons/HuggingFaceIcon';
import SourceControlIcon from './icons/SourceControlIcon';
import styles from '../styles/Bottombar.module.css';

const Bottombar = () => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href="https://github.com/drkostas/drkostas.github.io"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <a href="https://www.linkedin.com/in/gkos/" target="_blank" rel="noopener">
          <div className={styles.section}>
            <LinkedinIcon className={styles.icon} />
            <p>Linkedin</p>
          </div>
        </a>
        <a href="https://github.com/drkostas" target="_blank" rel="noopener">
          <div className={styles.section}>
            <GithubIcon className={styles.icon} />
            <p>Github</p>
          </div>
        </a>
        <a href="https://scholar.google.com/citations?user=b___QQ8AAAAJ&hl=en&authuser=1&oi=sra" target="_blank" rel="noopener">
          <div className={styles.section}>
            <ScholarIcon className={styles.icon} />
            <p>Scholar</p>
          </div>
        </a>
        <a href="https://pypi.org/user/drkostas" target="_blank" rel="noopener">
          <div className={styles.section}>
            <PypiIcon className={styles.icon} />
            <p>PyPi</p>
          </div>
        </a>
        <a href="https://huggingface.co/drkostas" target="_blank" rel="noopener">
          <div className={styles.section}>
            <HuggingFaceIcon className={styles.icon} />
            <p>HuggingFace</p>
          </div>
        </a>
        {/* <div className={styles.section}>
          <NextjsIcon className={styles.icon} />
          <p>Powered by Next.js</p>
        </div> */}
        {/* <div className={styles.section}>
          <CheckIcon className={styles.icon} />
          <p>Prettier</p>
        </div> */}
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
