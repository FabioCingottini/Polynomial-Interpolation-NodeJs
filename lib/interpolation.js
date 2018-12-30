`use strict`;

const math = require(`mathjs`);

module.exports = async function(points, xVal) {
    return await getInterpolatePolynomial(points).eval({x : xVal})
};

function getInterpolatePolynomial(points) {
    const summatoryNodes = [];
    points.forEach(function summatory(point, i, points) {
        const yNode = new math.expression.node.ConstantNode(point.y);
        summatoryNodes.push(new math.expression.node.OperatorNode(`*`, `multiply`, [
            yNode,
            lagrange(i, point, points)
        ]))
    });
    // console.log(new math.expression.node.OperatorNode(`+`, `add`, summatoryNodes).toString());
    console.log(math.simplify(new math.expression.node.OperatorNode(`+`, `add`, summatoryNodes)).toString());
    return new math.expression.node.OperatorNode(`+`, `add`, summatoryNodes).compile();
}

function lagrange(summatoryIndex, point, points){
    const productoryNodes = [];
    points.forEach((jPoint, j) => {
        if (summatoryIndex !== j) {
            const numeratorNode = new math.expression.node.OperatorNode(`-`,`subtract`, [
                new math.expression.node.SymbolNode(`x`),
                new math.expression.node.ConstantNode(jPoint.x)
            ]);
            const denominatorNode = new math.expression.node.OperatorNode(`-`,`subtract`, [
                new math.expression.node.ConstantNode(point.x),
                new math.expression.node.ConstantNode(jPoint.x)
            ]);
            productoryNodes.push(new math.expression.node.OperatorNode(`/`,`divide`, [
                numeratorNode,
                denominatorNode
            ]))
        }
    });
    return new math.expression.node.OperatorNode(`*`, `multiply`, productoryNodes);
}