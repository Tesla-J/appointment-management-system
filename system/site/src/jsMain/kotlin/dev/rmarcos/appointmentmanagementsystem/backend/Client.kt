package dev.rmarcos.appointmentmanagementsystem.backend

import kotlin.js.Date

data class Client(
    val name: String,
    val email: String?,
    val phoneNumber: String,
    val birthDate: Date
)
