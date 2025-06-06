package dev.rmarcos.appointmentmanagementsystem.backend

import kotlin.js.Date

interface Mockable {
    fun createAppointment(
        name: String,
        email: String?,
        phoneNumber: String,
        birthDate: Date,
        appointmentDate: Date
    )
}