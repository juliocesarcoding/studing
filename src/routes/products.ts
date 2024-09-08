import router from "express";

const routers = router.Router();

routers.get("/", (req, res) => {
 res.status(200).json({ products: [] });
});
routers.get("/:id", (req, res) => {
 const { id } = req.params;
 res.status(200).json({ id, name: "Product 1", price: 100 });
});

export default routers;
