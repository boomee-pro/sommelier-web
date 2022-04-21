import Image from "next/image";

import styles from 'styles/checkout.module.scss';

import { useCart } from 'contexts/CartContext';

import { Row, Col } from "react-grid-system";

const WineDetails = ({wine}) => {
	const {incrementQuantity, decrementQuantity} = useCart();
    
	return (

		<Row className={styles.card} style={{rowGap: '1.5em'}}>
			<Col xs={12} md={6}>
					<Row>
						<Col xs={12} md={4}>
							<Image
                  src={wine.img}
                  width={110}
                  height={110}
                  objectFit="cover"
                  alt="Image de vin"
                />
						</Col>
						<Col xs={12} md={8} className={styles.name}>
							<div>
								<p>{wine.domain}</p>
								<p>{wine.name}</p>
							</div>
						</Col>
					</Row>
			</Col>
			<Col xs={12} md={2}>
				<div className={styles.quantity}>
					<div className={styles.button}>
						<button onClick={() => decrementQuantity(wine.id)}>-</button>
						<p>{wine.quantity}</p>
						<button onClick={() => incrementQuantity(wine.id)}>+</button>
					</div>
				</div>
			</Col>
			<Col xs={12} md={2}><p>{wine.price}</p></Col>
			<Col xs={12} md={2}><p>{wine.price*wine.quantity} €</p></Col>
		</Row>

	)
}

export default WineDetails;