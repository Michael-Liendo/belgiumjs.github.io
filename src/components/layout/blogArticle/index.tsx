import { compileMDX } from 'next-mdx-remote/rsc';
import LocalizedDate from '@/components/i18n/localizedDate';
import styles from './index.module.scss';

type Props = {
	source: string;
};

const Article = async ({ source }: Props) => {
	const { content, frontmatter } = await compileMDX<{
		title: string;
		desciption: string;
		date: Date;
	}>({
		source,
		options: { parseFrontmatter: true },
	}).then((res) => res);

	return (
		<article className={styles.articleLayout}>
			<h1>{frontmatter.title}</h1>
			<p>{frontmatter.desciption}</p>
			<LocalizedDate
				value={frontmatter.date}
				year="numeric"
				month="long"
				day="numeric"
			/>
			<div>{content}</div>
		</article>
	);
};

export default Article;