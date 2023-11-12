class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertNode(value) {
        const newNode = new Node(value, null);
        if (this.head === null) {
            this.head = newNode;
            return
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    display() {
        let current = this.head;
        if (current === null) {
            div.innerHTML = "Lista Vacía";
        }
        div.innerHTML = "";
        while (current) {
            div.innerHTML += current.value + ", ";
            current = current.next;
        }
    }

    findNode(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    deleteNode(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

const lista = new LinkedList();
var div = document.getElementById("datos");

function function_agregar() {
    const datoInput = document.getElementById("dato");
    const dato = datoInput.value;
    if (dato == "") {
        alert(`No se admiten datos vacíos`);
    }
    else if (isNaN(dato)) {
        alert(`Debe escribir un número`);
    }
    else {
        lista.insertNode(dato);
        datoInput.value = "";
        alert(`Dato agregado a la lista`);
        lista.display();
    }
}

function function_mostrar() {
    lista.display();
}

function function_eliminar() {
    const datoInput = document.getElementById("dato");
    const dato = datoInput.value;
    if (dato == "") {
        alert(`No se admiten datos vacíos`);
    } else if (isNaN(dato)) {
        alert(`Debe escribir un número`);
    }
    else {
        if (lista.deleteNode(dato)) {
            alert(`Dato eliminado correctamente`);
            datoInput.value = "";
            lista.display();
        }
        else {
            alert(`Dato no existe`);
        }
    }
}

function function_buscar() {
    const datoInput = document.getElementById("dato");
    const dato = datoInput.value;
    if (dato == "") {
        alert(`No se admiten datos vacíos`);
    } else if (isNaN(dato)) {
        alert(`Debe escribir un número`);
    }
    else {
        if (lista.findNode(dato) != null) {
            alert(`Dato existe`);
            datoInput.value = "";
            lista.display();
        } else {
            alert(`Dato no existe`)
        }
    }
}