const { response } = require("express");

const salesGet = async (req, res = response) => {
  try {
    res.json({
      success: true,
      data: {
        items: [
          {
            month: "Enero",
            amountEstate: 145,
            totalSales: 7500000,
          },
          {
            month: "Febrero",
            amountEstate: 45,
            totalSales: 2500000,
          },
          {
            month: "Marzo",
            amountEstate: 14,
            totalSales: 500000,
          },
          {
            month: "Abril",
            amountEstate: 19,
            totalSales: 700000,
          },
          {
            month: "Mayo",
            amountEstate: 1,
            totalSales: 50000,
          },
          {
            month: "Junio",
            amountEstate: 25,
            totalSales: 250000,
          },
        ],
        totalItems: 6,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something got error",
    });
  }
};

module.exports = {
  salesGet,
};
