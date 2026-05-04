import { LucideIcon } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
}

const ServiceCard = ({ title, description, Icon, href }: ServiceCardProps) => {
  return (
    <a href={href} className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={40} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </a>
  );
};

export default ServiceCard;
