import { useEffect } from "react";
import { useParams } from "react-router-dom"

// url 파라미터를 컴포넌트에서 받아오는 방법은 useParams를 사용하면 된다.
// 시간이 걸리는 fetch작업의 경우 async await등으로 블러킹 될 수 있음을 알린다.
function Details() {
    const { id } = useParams();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <h1>details</h1>
    );
}
export default Details;

