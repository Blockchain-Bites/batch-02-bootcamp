// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract MiPrimerContrato {
    string saludo;
    string nombreYApellido = "Lee Marreros";

    function set(string memory _nuevoSaludo) public {
        saludo = _nuevoSaludo; // no se necesita 'this'
    }

    function get() public view returns (string memory) {
        return saludo;
    }
}
