import style from './pageNotFound.module.scss';

import bigLoupe from '../../../assets/icons/BigLoupe.png';

const PageNotFound = props => {
	const { anotherList, image, title } = props;

	return (
		<div className={style.pageNotFound}>
			<img className={style.icon} src={image || bigLoupe} alt='not found' />
			<h1 className={style.title}>{title || 'Товары не найдены'}</h1>

			<h2 className={style.subTitle}>Возможно вас заинтересует</h2>
			{anotherList}
		</div>
	);
};

export default PageNotFound;
