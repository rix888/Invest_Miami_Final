json.array!(@models) do |model|
  json.extract! model, :id, :Post, :title, :body, :photo
  json.url model_url(model, format: :json)
end
