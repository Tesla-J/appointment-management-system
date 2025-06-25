console.log('Happy developing ✨')

class Medic
{
    constructor(
        speciality,
        fullName,
        email,
    ) {
        this.speciality = speciality;
        this.fullName = fullName;
        this.email = email;
    }
}

class Pacient
{
    constructor(
        phone,
        birthdate,
        fullName,
        email,
    ) {
        this.phone = phone;
        this.birthdate = birthdate;
        this.fullName = fullName;
        this.email = email;
    }
}

class Invoice
{
    constructor(
        date,
        service,
        client,
        attendant,
    ) {
        this.date = date;
        this.service = service;
        this.client = client;
        this.attendant = attendant;
    }
}

class Appointment
{
    constructor (
        id,
        dateTime,
        status,
        speciality,
        invoice,
        doctor,
        client,
    ) {
        this.id = id;
        this.dateTime = dateTime;
        this.status = status;
        this.speciality = speciality;
        this.invoice = invoice;
        this.doctor = doctor;
        this.client = client;
    }
}

class Node
{
    constructor(
        element,
    ) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList
{
    constructor() {
        this.head = null;
    }

    add(element) {
        if (element == null)
            return;
        if (this.head == null) {
            this.head = element;
            return;
        }
        let cur = this.head;
        while (cur.next != null) {
            cur = cur.next;
        }
        cur.next = element;
    }

    get(filter) {
        let cur = this.head;
        while (cur != null) {
            if (filter(cur))
                return cur;
            cur = cur.next;
        }
    }

    update(element, filter) {
        let cur = this.head;
        while (cur != null) {
            if (filter(cur)){
                let next = cur.next;
                cur = element;
                element.next = next;
            }
        }
    }

    remove(element) {
        let cur = this.head;
        while (cur != null) {
            if (cur.next == element) {
                let tmp = cur.next;
                cur.next = tmp.next;
                tmp.next = null;
                return;
            }
            cur = cur.next;
        }
    }
}

