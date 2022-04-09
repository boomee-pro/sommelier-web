import Layout from "components/Layout/layout";

const Order = () => {

  return (
    <div>Validation</div>
  )

}

Order.getLayout = function getLayout(page) {
  return (
    <Layout noCartIcon>
      {page}
    </Layout>
  )
}



export default Order;