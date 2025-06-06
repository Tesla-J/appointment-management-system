package dev.rmarcos.appointmentmanagementsystem.backend

import kotlin.js.Date

enum class AppointmentStatus {
    TODO,
    DONE,
    MISSED
}

data class Appointment(
    val date: Date,
    val client: Client,
    val status: AppointmentStatus
)
