extends Node

export (PackedScene) var obstacle_scene
var score

func _ready():
	randomize()
	new_game()

func new_game():
	score = 0
	$Player.start($StartPosition.position)
	$StartTimer.start()
	$ScoreLabel.text = "Score: " + str(score)
	$ScoreLabel.show()
	$Message.hide()

func game_over():
	$ScoreTimer.stop()
	$ObstacleTimer.stop()
	$Message.show()

func _on_ObstacleTimer_timeout():
	var obstacle = obstacle_scene.instance()
	var obstacle_spawn_location = $ObstaclePath/ObstacleSpawnLocation
	obstacle_spawn_location.offset = randi()

	obstacle.position = obstacle_spawn_location.position

	add_child(obstacle)

func _on_ScoreTimer_timeout():
	score += 1
	$ScoreLabel.text = "Score: " + str(score)

func _on_Player_hit():
	game_over()

func _on_StartTimer_timeout():
	$ObstacleTimer.start()
	$ScoreTimer.start()
