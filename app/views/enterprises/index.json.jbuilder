json.array!(@enterprises) do |enterprise|
  json.extract! enterprise, :id
  json.url enterprise_url(enterprise, format: :json)
end
