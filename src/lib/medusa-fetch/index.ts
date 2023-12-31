const MEDUSA_API_KEY = process.env.NEXT_PUBLIC_MEDUSA_API_KEY || ""
const REVALIDATE_WINDOW = process.env.REVALIDATE_WINDOW || "1000 * 60 * 60 * 24 * 30" // 30 days
const ENDPOINT =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

export default async function medusaRequest(
  method: string,
  path = "",
  payload?: {
    query?: Record<string, any>
    body?: Record<string, any>
  }
) {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "x-publishable-key": MEDUSA_API_KEY,
    },
    next: { revalidate: parseInt(REVALIDATE_WINDOW) },
  }

  if (payload) {
    if ("body" in payload) {
      options.body = JSON.stringify(payload.body)
    }
    if ("query" in payload) {
      const params = objectToURLSearchParams(payload.query!).toString()
      path = `${path}?${params}`
    }
  }

  try {
    const result = await fetch(`${ENDPOINT}/store${path}`, options)
    const body = await result.json()

    if (body.errors) {
      throw body.errors[0]
    }

    return {
      status: result.status,
      ok: result.ok,
      body,
    }
  } catch (error: any) {
    throw {
      error: error.message,
    }
  }
}

function objectToURLSearchParams(obj: Record<string, any>): URLSearchParams {
  const params = new URLSearchParams()

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((value: any) => {
        params.append(`${key}[]`, value)
      })
    } else {
      params.append(key, obj[key])
    }
  }

  return params
}
