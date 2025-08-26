import { Router } from "express";
import { pool } from "../conexion_db.js";

const router = Router();

// 1. Get all farm
router.get("/get", async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT * FROM farm;
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 2. Get a farm by ID
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query(
            `SELECT * FROM farms WHERE id_farm = ?;`,
            [id]
        );
        if (rows.length === 0) {
            return res.status(404).json({ mensaje: "Farm not found" });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 3. Create a farm
router.post("/create", async (req, res) => {
    try {
        const { name, region, technical_manager, soil_type } = req.body;

        if (!name || !region || !technical_manager || !soil_type) {
            return res.status(400).json({ mensaje: "Required fields are missing" });
        }

        const [result] = await pool.query(
            `INSERT INTO farms (name, region, technical_manager, soil_type)
             VALUES (?, ?, ?, ?, ?)`,
            [name, region, technical_manager, soil_type]
        );

        res.status(201).json({ mensaje: "farm created successfully", id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 4. Update a farm
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {name, region, soil_type } = req.body;    

        const [result] = await pool.query(
            `UPDATE farms
             SET  name = ?, region = ?, soil_type = ?
             WHERE id_farm = ?`,
            [name, region, soil_type, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "farm not found" });
        }

        res.json({ mensaje: "Successfully updated farm" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 5. Delete a farm
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(
            `DELETE FROM farms WHERE id_farm = ?`,
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "farm not found" });
        }

        res.json({ mensaje: "Successfully deleted farm" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;