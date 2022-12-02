import { Flex, Image } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import styles from '../styles/Home.module.css'

const WalletMultiButtonDynamic = dynamic(
	async () =>
		(await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
	{ ssr: false }
);

const AppBar = () => {
	return (
		<div className={styles.AppHeader}>
			<Image src="/solanaLogo.png" alt="solana-logo" height={30} width={200}/>
			<span>Movie Reviews</span>
			<WalletMultiButtonDynamic />
		</div>
	);
};

export default AppBar;
