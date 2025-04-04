import { getItemBySlug } from '@/utils/actions/get-data'
import { PostProps } from '@/utils/post.type';
import { Metadata } from 'next';
import { Content } from './components/content';
import { Suspense } from 'react';
import { LoadingPost } from './components/loading';

interface PropsParams {
    params: { slug: string };
}

export async function generateMetadata({ params }: PropsParams): Promise<Metadata> {
    try {
        const { slug } = params;
        const { objects }: PostProps = await getItemBySlug(slug)
            .catch(() => {
                return {
                    title: "Space Motors - Sua oficina especializada!",
                    description: "Oficina de motos em Belo Horizonte",
                }
            })

        return {
            title: `Space Motors - ${objects[0].title}`,
            description: `${objects[0].metadata.description.text}`,
            keywords: ["space motorrs", "troca de oleo", "space motors troca de oleo"],
            openGraph: {
                title: `Space Motors - ${objects[0].title}`,
                images: [objects[0].metadata.banner.url]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true,
                }
            }
        }
    } catch (err) {
        return {
            title: "Space Motors - Sua oficina especializada!",
            description: "Oficina de motos em Belo Horizonte",
        }
    }
}

export default async function Page({ params }: PropsParams) {

    const { slug } = params;
    
    return (
        <>
            <Suspense fallback={<LoadingPost />}>
                <Content slug={slug} />
            </Suspense>
        </>
    )
}