import { client } from "../../../libs/client";
import parse from 'html-react-parser';
import Header from "../../Components/Layouts/Header";



export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({endpoint : "pety" , contentId : id })

    return {
        props:{
            pety: data,
        },
    };
};

export const getStaticPaths = async() => {
    const data = await client.get({ endpoint: "pety" });

    const paths = data.contents.map((content) => `/pety/${content.id}`);
    return {
        paths,
        fallback:true,
    };
};

function PetyId({ pety }) {
    return (
        <>
        <Header/>
        <main>
            <div className="pety_detail">
                <div className="detail_item">
                    <h2>{pety.title}</h2>
                    <img src={pety.image.url} />
                </div>
                {parse(pety.contents)}
            </div>
        </main>
        </>
    )
}

export default PetyId;