import { getAllTodoIds, getTodoFromDB } from '../../lib/clients/todos'
import Head from 'next/head'
import Link from 'next/link'

// default エクスポートしているコンポーネントがページになる
const Todo = ({ todo }) => {
  return (
    <>
      <Head>
        <title>{todo.title}</title>
      </Head>
      <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <p>{todo.expiration}</p>
      </div>
      <div>
        <Link href="/">
          <a>← ダッシュボードへ戻る</a>
        </Link>
      </div>
    </>
  )
}
export default Todo;

// params には [id].js を参照して idキー が入っている
export const getStaticProps = ({ params }) => {
  const todo = getTodoFromDB(params.id)
  return {
    props: {
      todo
    }
  }
}

export const getStaticPaths = () => {
  const paths = getAllTodoIds();
  return {
    paths,
    fallback: false
  }
}