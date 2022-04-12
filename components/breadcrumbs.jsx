import Link from "next/link";

import styles from "styles/breadcrumb.module.scss";
import classNames from "classnames";

const BreadCrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
        <ol className={styles.breadcrumb}>
          {items.map((link, i) => <li key={i} className={classNames(styles.breadcrumbItem, link.active && styles.breadcrumbActive)}>
            {!link.active ? <Link href={link.destination}>{link.title}</Link> : link.title}
          </li>)}
        </ol>
    </nav>
  )
}

export default BreadCrumbs;